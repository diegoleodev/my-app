import { useState, useEffect } from 'react';


const TooogleTheme = () => {

    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('darkTheme');
        setIsDarkMode(savedTheme === 'true');
      }, []);
    
      const toggleDarkMode = () => {
        const newTheme = !isDarkMode;
        setIsDarkMode(newTheme);
        localStorage.setItem('darkTheme', newTheme.toString());
      };

    useEffect(() => {
      if (isDarkMode) {
        document.documentElement.classList.add('dark-theme');
        document.documentElement.classList.add('circle-active');

      } else {
        document.documentElement.classList.remove('dark-theme');
        document.documentElement.classList.remove('circle-active');
      }
    }, [isDarkMode]);
  
    return(
        <div className="body-circle" onClick={toggleDarkMode} title='Theme'>
            <i className="bi bi-moon"></i>
            <i className="bi bi-brightness-low"></i>
            <button className="circle"></button>
        </div>
    )
}

export default TooogleTheme;