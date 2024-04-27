import { ReactNode, useState } from 'react';

type Props = {
    isOpen: boolean,
    onClose: () => void,
    children: ReactNode
}

const Modal = ({ isOpen, onClose, children }: Props) => {
    const [modalOpen, setModalOpen] = useState(isOpen);

    // Close the modal when the backdrop is clicked
    const handleClose = () => {
        setModalOpen(false);
        onClose && onClose();
    };

    return (
        <>
            {/* Overlay */}
            {modalOpen && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
                    {/* Modal content */}
                    <div className="bg-white rounded-lg p-8 w-96">
                        {/* Close button */}
                        <button
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                            onClick={handleClose}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                        {/* Modal content */}
                        {children}
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;
