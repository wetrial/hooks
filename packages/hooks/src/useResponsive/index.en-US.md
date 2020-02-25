---
title: useResponse
group:
  title: Dom
  path: /dom
  order: 500
---

# useResponsive

React Hook for getting responsive info.

## Examples

### Get responsive info in components


<code src="./demo/demo1.tsx">

## API

```typescript
interface ResponsiveInfo {
  screen: string;
  size: {
    height: number;
    width: number;
  };
}
function useResponsive():ResponsiveInfo
```

### Config

The default config is the same as bootstrap:

```javascript
{
   xs: {
    min: -Infinity,
    max: 576,
  },
  sm: {
    min: 576,
    max: 768,
  },
  md: {
    min: 768,
    max: 992,
  },
  lg: {
    min: 992,
    max: 1200,
  },
  xl: {
    min: 1200,
    max: 1600,
  },
  xxl: {
    min: 1600,
    max: +Infinity,
  }
}
