import { useEffect } from "react";

const Popup = ({ isOpen, onClose }) => {

    // useEffect для обработчика 'Escape'
    useEffect(() => {
        // ограничиваем навешивание обработчика: если не открыт, то не нужно навешивать
        if (!isOpen) return;
        // объявляем внутри `useEffect` функцию, чтобы она не теряла ссылку при перерисовке компонента
        const closeByEscape = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        }
        document.addEventListener('keydown', closeByEscape)

        return () => document.removeEventListener('keydown', closeByEscape)
    }, [isOpen, onClose])

    // Обработчик оверлея
    const handleOverlay = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    }

    // Внутри верстка обертки любого попапа с классом 'popup' и добавлением 'popup_opened'. 
    return (
        <div className={`popup ${isOpen ? "popup_opened" : ""}`}
            onClick={handleOverlay}>
            <div className='popup__container'>
                <div className="popup__success-icon" />
                <h2 className="popup__title">Редактирование завершено успешно!</h2>
                <button className='popup__close-icon' type='button' onClick={onClose} />
            </div>
        </div>
    );
};

export default Popup;