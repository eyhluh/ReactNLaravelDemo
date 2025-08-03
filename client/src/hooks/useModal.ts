import { useState, useCallback } from 'react'
import type { UserColumns } from '../Interfaces/UserColumns';

export const useModal = (initialState: boolean) => {
    const [isOpen, setIsOpen] = useState(initialState);
    const [selectedUser, setSelectedUser] = useState<UserColumns | null>(null)

    const openModal = useCallback((user?: UserColumns | null) => {
        setSelectedUser(user || null)
        setIsOpen(true)
    }, []) 

    const closeModal = useCallback(() => {
        setSelectedUser(null)
        setIsOpen(false)
    }, [])

        const toggleModal = useCallback(() => 
            setIsOpen((prev) => !prev), []
        );
    
        return { isOpen, selectedUser, openModal, closeModal, toggleModal };
    }