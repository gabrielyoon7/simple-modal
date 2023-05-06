import { ReactNode } from 'react';
interface ModalProps {
    modalOpen: boolean;
    closeModal?: () => void;
    children: ReactNode;
}
declare function Modal({ modalOpen, closeModal, children }: ModalProps): import("react").ReactPortal | null;
export default Modal;
