import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

export default function Img(props) {
  const [isOpen, setIsOpen] = useState(() => false);
  const imgRef = useRef();
  return (
    <>
      <picture
        onClick={(event) => {
          event.preventDefault();
          event.stopPropagation();
          setIsOpen(true);
        }}
      >
        <source srcSet={`${props.src}.avif`} type="image/avif" />
        <source srcSet={`${props.src}.webp`} type="image/webp" />
        <img {...props} src={`${props.src}.jpg`} alt={props.alt} />
      </picture>
      <Transition.Root show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          static
          className="fixed z-10 inset-0 overflow-y-auto"
          initialFocus={imgRef}
          open={isOpen}
          onClose={() => setIsOpen(() => false)}
        >
          <div className="flex items-center justify-center min-h-screen text-center">
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
              className="inline-block align-middle h-screen"
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
              <div className="inline-block align-middle overflow-hidden transform transition-all">
                <picture>
                  <source srcSet={`${props.src}.avif`} type="image/avif" />
                  <source srcSet={`${props.src}.webp`} type="image/webp" />
                  <img
                    className="animate-pulse overflow-hidden mx-auto max-w-screen max-h-screen shadow-inner bg-gray1 object-cover bg-cover bg-center bg-no-repeat bg-avatar cursor-zoom-out"
                    src={`${props.src}.jpg`}
                    alt={props.alt}
                    width={props.width}
                    height={props.height}
                    decoding="async"
                    loading="lazy"
                    ref={imgRef}
                    onClick={() => setIsOpen(() => false)}
                    onLoad={(event) =>
                      event.target.classList.add(
                        "w-auto",
                        "h-auto",
                        "animate-none"
                      )
                    }
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
