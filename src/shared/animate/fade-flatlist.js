import React from 'react';
import {  useCallback, useEffect, useRef } from 'react';
import { Animated, Easing, FlatList } from 'react-native';

const FadeInFlatList =({
  renderItem: originalRenderItem,
  itemsToFadeIn = 10,
  initialDelay = 0,
  durationPerItem = 50,
  parallelItems = 1,
  ItemSeparatorComponent,
  ...props
}) => {
  const value = useRef(new Animated.Value(0));

  const FadeInComponent = useCallback(({ index, children }) => {
      const moveBy = (1 - 1 / parallelItems) * index;
      return (
        <Animated.View
          style={{
            opacity: value.current.interpolate({
              inputRange:
                index === 0
                  ? [-1, 0, 1, 2]
                  : [index - 1 - moveBy, index - moveBy, index + 1 - moveBy, index + 2 - moveBy],
              outputRange: [0, 0, 1, 1],
              extrapolate: 'clamp',
            }),
          }}>
          {children}
        </Animated.View>
      );
    },
    [],
  );

  const Separator = useCallback(({ index })=> {
    return ItemSeparatorComponent && index !== undefined ? (
      <FadeInComponent index={index}>
        <ItemSeparatorComponent />
      </FadeInComponent>
    ) : ItemSeparatorComponent ? (
      <ItemSeparatorComponent />
    ) : null;
  }, []);

  const Item= useCallback(({ info }) => {
    useEffect(() => {
      info.separators.updateProps('leading', { index: info.index });
    }, []);

    return <FadeInComponent index={info.index}>{originalRenderItem(info)}</FadeInComponent>;
  }, []);

  const renderItem = useCallback(
    (info) => {
      return info.index < itemsToFadeIn  ? <Item info={info} /> : originalRenderItem(info);
    },
    [originalRenderItem, itemsToFadeIn],
  );

  useEffect(() => {
    value.current.setValue(0);

    Animated.timing(value.current, {
      toValue: itemsToFadeIn + 1,
      useNativeDriver: true,
      delay: initialDelay,
      duration: itemsToFadeIn * durationPerItem,
      easing: Easing.linear,
    }).start();
  }, [initialDelay, durationPerItem, itemsToFadeIn]);

  return (
    <FlatList
      {...props}
      renderItem={renderItem}
      ItemSeparatorComponent={ItemSeparatorComponent ? Separator : null}
    />
  );
};

export default FadeInFlatList;