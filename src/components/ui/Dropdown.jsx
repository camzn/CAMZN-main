/* eslint-disable react/prop-types */
import { createContext, forwardRef, useContext, useEffect, useRef, useState } from "react";

const DropdownContext = createContext(null);

export const Root = forwardRef(function DropdownRoot({ className, children, direction }, ref) {
	const [isOpen, setOpen] = useState(false);

	const selfRef = useRef(null);

	useEffect(
		function () {
			const { current } = selfRef;

			if (!current) {
				return;
			}

			if (ref) {
				ref.current = current;
			}

			if (!isOpen) {
				return;
			}

			function handleClick(e) {
				if (current.contains(e.target)) {
					return;
				}

				setOpen(false);
			}

			document.addEventListener("click", handleClick);

			return () => document.removeEventListener("click", handleClick);
		},
		[isOpen, setOpen, ref, selfRef],
	);

	let flexDirection = "col";

	if (direction === "right" || direction === "left") {
		flexDirection = "row";
	}

	return (
		<DropdownContext.Provider value={{ isOpen, setOpen, direction }}>
			<div
				ref={selfRef}
				className={`flex flex-${flexDirection} ${direction === ""} items-center ${className}`}
			>
				{children}
			</div>
		</DropdownContext.Provider>
	);
});

export const Trigger = forwardRef(function DropdownTrigger({ className, children }, ref) {
	const { isOpen, setOpen } = useContext(DropdownContext);

	return (
		<button ref={ref} className={`${className}`} onClick={() => setOpen(!isOpen)}>
			{children}
		</button>
	);
});

export const Content = forwardRef(function DropdownContent({ className, children }, ref) {
	const { isOpen } = useContext(DropdownContext);

	return (
		<div ref={ref} className={`${!isOpen && "hidden"} left-2 z-[100] ${className}`}>
			{children}
		</div>
	);
});

export const Item = forwardRef(function DropdownItem(
	{ className, children, onClick, closeOnSelect },
	ref,
) {
	const { setOpen } = useContext(DropdownContext);

	return (
		<div
			ref={ref}
			className={`${className}`}
			onClick={async () => {
				await onClick?.();

				if (closeOnSelect) {
					setOpen(false);
				}
			}}
		>
			{children}
		</div>
	);
});
