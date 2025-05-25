import React from 'react';
import styles from './suspended-label.module.css';

export interface SuspendedLabelProps {
  children?: React.ReactNode;
}

export default function SuspendedLabel({ children }: SuspendedLabelProps) {
  return <span className={styles.label}>{children}</span>;
}
