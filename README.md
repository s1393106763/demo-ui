# Demo UI 组件库工程化架构

这是一个基于 **pnpm Workspaces + Turborepo** 搭建的现代化、多框架（React & Vue）组件库底层架构。

## 🏗️ 架构概览

- **Packages**:
  - `@demo-ui/react`: React 组件库核心包。
  - `@demo-ui/vue`: Vue 3 组件库核心包。
  - `@demo-ui/tokens`: 共享的设计变量（Colors, Spacing 等）。
  - `@demo-ui/ts-config` & `@demo-ui/eslint-config`: 统一的工程规范配置。
- **Apps**:
  - `storybook-react` & `storybook-vue`: 独立的可视化文档与开发环境。
  - `playground` & `playground-vue`: 框架原生的调试沙箱。

---

## 🚀 新组件开发流程 (SOP)

开发一个新组件（如 `Input`）时，请遵循以下标准化流程：

### 1. 定义设计变量 (Design Tokens) —— _可选_

如果组件涉及新的原子属性（颜色、间距等），请在 `packages/tokens/src/index.ts` 中定义。

- **命令**: `pnpm build --filter @demo-ui/tokens`

### 2. 编写核心代码 (Implementation)

在对应的包（`packages/react` 或 `packages/vue`）中实现逻辑。

- 创建目录：`src/components/Input/`
- 实现组件并确保在 `src/index.ts` 中导出。

### 3. 本地预览调试 (Playground)

在 Playground 应用中引入并测试组件的最原始渲染效果。

- **命令**: `pnpm dev` (启动所有调试环境)

### 4. 编写交互文档 (Storybook)

为组件创建 `.stories.tsx` (React) 或 `.stories.ts` (Vue) 文件。

- 确保覆盖 `Basic`, `Disabled`, `Error` 等不同状态。
- **验证**: 在 `localhost:6006` (React) 或 `6007` (Vue) 查看效果。

### 5. 编写单元测试 (Testing)

使用 Vitest 确保逻辑健壮性。

- 创建 `Input.test.tsx` 并编写测试用例。
- **命令**: `pnpm test`

### 6. 注册变更记录 (Changesets) —— _关键_

在提交代码前，必须记录本次改动的影响范围。

- **命令**: `pnpm changeset`
- **动作**: 勾选改动的包 -> 选择版本类型 (patch/minor/major) -> 输入描述。

### 7. 规范化提交 (Git Commit)

项目配置了 Husky 和 Commitlint，请确保 Commit Message 符合规范。

- **格式**: `feat: add input component` 或 `fix: resolve input padding`

### 8. 自动化流水线 (CI/CD)

提交 Pull Request 后，GitHub Actions 会自动：

- 运行 Lint 检查。
- 运行所有单元测试。
- 执行构建验证。

---

## 🛠️ 常用开发命令

```bash
# 安装依赖
pnpm install

# 启动所有开发环境 (Storybook + Playgrounds)
pnpm dev

# 全局构建
pnpm build

# 运行所有包的测试
pnpm test

# 添加变更记录
pnpm changeset
```
