import { Fragment, useCallback, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

export default function Img(props) {
  const imgRef = useRef(null);
  const [isOpen, setIsOpen] = useState(() => false);
  const handleOpen = useCallback(() => {
    setIsOpen(true);
  }, []);
  const handleClose = useCallback(() => setIsOpen(() => false), []);
  const handleLoad = useCallback(
    (event) => event.currentTarget.classList.replace("animate-pulse", "w-auto"),
    []
  );
  return (
    <>
      <picture onClick={handleOpen}>
        <source srcSet={`${props.src}.avif`} type="image/avif" />
        <source srcSet={`${props.src}.webp`} type="image/webp" />
        <img {...props} src={`${props.src}.jpeg`} alt={props.alt} />
      </picture>
      <Transition show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={imgRef}
          open={isOpen}
          onClose={handleClose}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25 transition-opacity" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95 transform-gpu"
                enterTo="opacity-100 scale-100 transform-gpu"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100 transform-gpu"
                leaveTo="opacity-0 scale-95 transform-gpu"
              >
                <Dialog.Panel className="overflow-hidden align-middle shadow-xl transition-all">
                  <Dialog.Title as="h2" className="sr-only">
                    {props.alt}
                  </Dialog.Title>
                  <picture>
                    <source srcSet={`${props.src}.avif`} type="image/avif" />
                    <source srcSet={`${props.src}.webp`} type="image/webp" />
                    <img
                      className="mx-auto aspect-auto h-screen max-h-screen animate-pulse cursor-zoom-out overflow-hidden bg-gray1 bg-avatar bg-cover bg-center bg-no-repeat object-cover shadow-inner"
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
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
