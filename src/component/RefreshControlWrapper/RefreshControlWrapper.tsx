import React from 'react';
import { RefreshControl, RefreshControlProps, StyleSheet } from 'react-native';
import { RefreshControlStyles } from './RefreshControlWrapper.styles';


// ---------- Props Interface ---------- //
interface RefreshControlWrapperProps
  extends Omit<RefreshControlProps, 'colors' | 'progressBackgroundColor'> {
  refreshing: boolean;
  onRefresh: () => void;
}

// ---------- Functional Component ---------- //
const RefreshControlWrapper: React.FC<RefreshControlWrapperProps> = ({
  refreshing,
  onRefresh,
  ...props
}) => {
  const styles = RefreshControlStyles;
  return (
    <RefreshControl
      refreshing={refreshing}
      onRefresh={onRefresh}
      progressBackgroundColor={styles.refreshControl.backgroundColor}
      colors={[styles.refreshControl.color]}
      {...props}
    />
  );
};


export default RefreshControlWrapper;
