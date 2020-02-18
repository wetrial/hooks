---
title: useFormTable
order: 1000
group:
  title: Ant Design
  path: /antd
  order: 900
---

# useFormTable

It encapsulates the common AntD [Form](https://ant.design/components/form-cn/) and AntD [Table](https://ant.design/components/table-cn/) linkage logic

## Examples

### Form and Table data binding

<code src="./demo/demo3.tsx" />

### Data caching

<code src="./demo/demo4.tsx" />

## API

useFormTable is based on [useRequest](/async). All [useRquest Pagination](/async?anchor=pagination#api-1) APIs can be used directly. For example `cacheKey`,` manual`, etc.

useFormTable adds `result.search` and` options.form`.

```javascript
const {
  ...,
  search: {
    type: 'simple' | 'advance';
    changeType: () => void;
    submit: () => void;
    reset: () => void;
  };
} = useFormTable(
  service,
  {
    ...,
    form
  }
);
```