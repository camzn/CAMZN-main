/* eslint-disable react/prop-types */
import { forwardRef, useState, Children, cloneElement, useEffect, useRef } from "react";

export const Root = forwardRef(function DropdownRoot({ className, children }, ref) {
	const [isOpen, setOpen] = useState(false);
	
	const selfRef = useRef(null);

	let trigger;
	let content;

	Children.forEach(children, function (child) {
		switch (child.type.render?.name) {
			case "DropdownTrigger":
				trigger = child;
				break;
			case "DropdownContent":
				content = child;
				break;
		}
	});

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

	return (
		<div
			ref={selfRef}
			className={`flex flex-row ${className}`}
		>
			<div onClick={() => setOpen(!isOpen)}>{trigger}</div>
			{isOpen && (
				<div className="flex relative h-full items-center">
					{cloneElement(content, { closeMenu: () => setOpen(false) })}
				</div>
			)}
		</div>
	);
});

export const Trigger = forwardRef(function DropdownTrigger({ className, children }, ref) {
	return (
		<button ref={ref} className={`${className}`}>
			{children}
		</button>
	);
});

export const Content = forwardRef(function DropdownContent(
	{ className, children, closeMenu },
	ref,
) {
	children = Children.map(children, (child) => cloneElement(child, { closeMenu }));

	return (
		<div ref={ref} className={`absolute z-[100] left-4 ${className}`}>
			{children}
		</div>
	);
});

export const Item = forwardRef(function DropdownItem(
	{ className, children, onClick, closeOnSelect, closeMenu },
	ref,
) {
	return (
		<div
			ref={ref}
			className={`${className}`}
			onClick={async () => {
				await onClick?.();

				if (closeOnSelect) {
					closeMenu();
				}
			}}
		>
			{children}
		</div>
	);
});
