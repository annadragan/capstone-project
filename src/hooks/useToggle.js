import { useCallback, useState } from 'react';

export default function ToggleButton(primaryValue = false) {
  const [isActive, setIsActive] = useState(primaryValue);
  const toggle = useCallback(() => setIsActive(isActive => !isActive), []);

  return [isActive, toggle];
}
