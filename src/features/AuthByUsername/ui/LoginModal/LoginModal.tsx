import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'widgets/Modal';
import { useTranslation } from 'react-i18next';
import { LoginForm } from '../LoginForm/LoginForm';

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => {
    const { t } = useTranslation();
    return (
        <Modal className={classNames('', {}, [className])} isOpen={isOpen} onClose={onClose} lazy>
            <LoginForm />
        </Modal>
    );
};
