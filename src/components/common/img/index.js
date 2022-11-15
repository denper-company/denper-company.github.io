import { Fragment, useCallback, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

export default function Img(props) {
  const imgRef = useRef();
  const [isOpen, setIsOpen] = useState(() => false);
  const handleOpen = useCallback((event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsOpen(true);
  }, []);
  const handleClose = useCallback(() => setIsOpen(() => false), []);
  const handleLoad = useCallback(
    (event) => event.target.classList.add("w-auto", "h-auto", "animate-none"),
    []
  );
  return (
    <>
      <picture onClick={handleOpen}>
        <source srcSet={`${props.src}.avif`} type="image/avif" />
        <source srcSet={`${props.src}.webp`} type="image/webp" />
        <img {...props} src={`${props.src}.jpeg`} alt={props.alt} />
      </picture>
      <Transition.Root show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          static
          className="fixed inset-0 z-10 overflow-y-auto"
          initialFocus={imgRef}
          open={isOpen}
          onClose={handleClose}
        >
          <div className="flex min-h-screen items-center justify-center text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block transform overflow-hidden align-middle transition-all">
                <picture>
                  <source srcSet={`${props.src}.avif`} type="image/avif" />
                  <source srcSet={`${props.src}.webp`} type="image/webp" />
                  <img
                    className="max-w-screen mx-auto aspect-auto max-h-screen animate-pulse cursor-zoom-out overflow-hidden bg-gray1 bg-avatar bg-cover bg-center bg-no-repeat object-cover shadow-inner"
                    src={`${props.src}.jpeg`}
                    alt={props.alt}
                    width={props.width}
                    height={props.height}
                    sizes="100vw"
                    loading="lazy"
                    ref={imgRef}
                    onClick={handleClose}
                    onLoad={handleLoad}
                  />
                </picture>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
