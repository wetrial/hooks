---
title: useTableColumnStateMapStorage
nav:
  title: Hooks
  path: /hooks
group:
  title: State
  path: /state
  order: 80
legacy: /state/useTableColumnStateMapStorage
---

# useTableColumnStateMapStorage

一个可以自动管理 ProTable 的列状态持久化存储在 localStorage 中的 Hook 。

## 代码演示

### 简单实用

<code src="./demo/demo1.tsx">

## API

```typescript
import { useTableColumnStateMapStorage } from '@wetrial/hooks';

const { tableProps, getColumns } = useTableColumnStateMapStorage('/organizations/list');

const { tableProps, getColumns } = useTableColumnStateMapStorage('/organizations/list', {
  name: { show: false },
});
```
