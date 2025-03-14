import React, { useCallback, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faX } from '@fortawesome/free-solid-svg-icons';

export const ToastMessage = ({ listToast, setListToast }) => {
    const handleRemoveToast = useCallback(
        (id) => {
            const toastListItem = listToast.filter((e) => e.id !== id);
            setListToast(toastListItem);
        },
        [listToast]
    );

    useEffect(() => {
        const interval = setInterval(() => {
            if (listToast.length > 0) {
                handleRemoveToast(listToast[0].id);
            }
        }, 2000);

        return () => {
            clearInterval(interval);
        };
    }, [listToast, handleRemoveToast]);

    return (
        <div className="fixed w-[320px] right-8 top-24 z-10">
            {listToast.map((toast, i) => (
                <div
                    className={`flex justify-between h-[80px] bg-white text-black p-4 mb-4 border-l-4 shadow-lg animate-toastMessage ${toast.border}`}
                    key={i}
                >
                    <FontAwesomeIcon className={`w-8 h-full ${toast.color}`} icon={faCheckCircle} />
                    <div className="h-full w-[220px]">
                        <h3 className="font-bold">{toast.title}</h3>
                        <p className="text-sm overflow-x-hidden opacity-70 h-5">{toast.description}</p>
                    </div>
                    <FontAwesomeIcon
                        onClick={() => handleRemoveToast(toast.id)}
                        className="w-4 h-full opacity-20 cursor-pointer"
                        icon={faX}
                    />
                </div>
            ))}
        </div>
    );
};
