'use client'

import { useEffect, useState } from "react";

const useGetHashURL = () => {
    const [hash, setHash] = useState('');
    useEffect(() => {
        if (typeof window !== 'undefined') {
          setHash(window.location.hash); // Lấy phần sau dấu #
        }
    
        const handleHashChange = () => {
          setHash(window.location.hash);
        };
    
        window.addEventListener('hashchange', handleHashChange);
    
        return () => window.removeEventListener('hashchange', handleHashChange);
      }, []);
    
      return {hash}
}

export default useGetHashURL