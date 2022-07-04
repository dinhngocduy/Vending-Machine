import { useEffect, useRef, useState } from 'react';
import useOutsideClick from 'libraries/hooks/useOutsideClick';
import { ICellTableItem } from './cell-table-item.interfaces';
import useEventListener from 'libraries/hooks/useEventListener';

const CellTableItemAdapter = (props: ICellTableItem) => {
    const { content, changeContent, getListOptions } = props;

    const inputRef = useRef<any>(null);
    const autocompleteRef = useRef<any>(null);

    // STATE
    const [isEditing, setIsEditing] = useState<boolean>(false);

    useOutsideClick(autocompleteRef, () => {
        isEditing && setIsEditing(false);
    });

    const onKeyDown = (e: any) => {
        if (e.keyCode === 13) {
            isEditing && setIsEditing(false);
        }
    }
    useEventListener('keydown', onKeyDown);

    useEffect(() => {
        isEditing && inputRef?.current?.focus();
    }, [isEditing])

    const handleClickCell = () => {
        getListOptions && getListOptions();
        setIsEditing(true)
    }

    const removeValue = (e: any) => {
        if (content) {
            changeContent("");
            inputRef.current.focus();
            return;
        }
        isEditing && setIsEditing(false);
    }

    const changeOption = (value: string) => {
        changeContent(value);
        // isEditing && setIsEditing(false);
    }

    return {
        isEditing,
        inputRef,
        autocompleteRef,
        handleClickCell,
        removeValue,
        changeOption
    };
}

export default CellTableItemAdapter;