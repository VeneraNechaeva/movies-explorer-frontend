import { useState, useCallback } from 'react';

// Хук для контроля любого количества инпутов в любых формах
export function useFormAndValidation(customValidators) {
    // Стейт переменные
    // Cодержатся значения инпутов
    const [values, setValues] = useState({});
    // Cодержатся ошибки
    const [errors, setErrors] = useState({});
    // Валидность импутов
    const [isValid, setIsValid] = useState(true);

    // Обработчик изменения инпутов, обновляет стейт
    const handleChange = (e) => {
        const { name, value } = e.target
        setValues({ ...values, [name]: value });
        const isDefaultValidationPass = e.target.closest('form').checkValidity()

        if (customValidators !== undefined && customValidators[name] !== undefined && value !== "" && !customValidators[name].func(value)) {
            setErrors({ ...errors, [name]: customValidators[name].errMsg });
            setIsValid(false);
        } else {
            setErrors({ ...errors, [name]: e.target.validationMessage });
            setIsValid(isDefaultValidationPass);
        }
    };

    // Очистка полей от ошибок
    const resetForm = useCallback((newValues = {}, newErrors = {}, newIsValid = false) => {
        setValues(newValues);
        setErrors(newErrors);
        setIsValid(newIsValid);
    }, [setValues, setErrors, setIsValid]);

    return { values, handleChange, errors, isValid, resetForm, setValues, setIsValid, setErrors };
}