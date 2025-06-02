import { useState, useEffect } from 'react';

type DeviceType = 'mobile' | 'desktop';

const MOBILE_BREAKPOINTS = [360, 390, 414, 393, 412];
/* const DESKTOP_BREAKPOINTS = [1920, 1366, 1440, 1280]; */

export function useDeviceType(): DeviceType {
  const [deviceType, setDeviceType] = useState<DeviceType>('desktop');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const isMobile = width <= 768 || MOBILE_BREAKPOINTS.includes(width);
      /* const isDesktop = width > 768 || DESKTOP_BREAKPOINTS.includes(width); */
      setDeviceType(isMobile ? 'mobile' : 'desktop');
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return deviceType;
} 