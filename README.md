<img src="https://mc-head.vercel.app/3d/java/uuid/90b27e82-deac-4e85-9155-10b055878ca9" alt="head" style="width=32px; height=32px;" align='center' width="128" height="128" >

# MC head

这是一个可以获取我的世界玩家 3d 或者 2d 头颅图片的 api.

使用`JavaScript`编写.

## 使用

### 1. 3D 头像接口

#### 1.1 Java 版 - 按用户名

* **请求方式**：`GET`
* **路径**：`/3d/java/username/:username`
* **参数说明**：

  * `username`：玩家用户名
* **返回**：玩家 3D 头像（PNG）

#### 1.2 Java 版 - 按 UUID

* **请求方式**：`GET`
* **路径**：`/3d/java/uuid/:uuid`
* **参数说明**：

  * `uuid`：玩家 UUID
* **返回**：玩家 3D 头像（PNG）

#### 1.3 基岩版 - 按用户名

* **请求方式**：`GET`
* **路径**：`/3d/bedrock/username/:username`
* **参数说明**：

  * `username`：玩家 Gamertag
* **返回**：玩家 3D 头像（PNG）

#### 1.4 基岩版 - 按 UUID

* **请求方式**：`GET`
* **路径**：`/3d/bedrock/uuid/:uuid`
* **参数说明**：

  * `uuid`：玩家 UUID
* **返回**：玩家 3D 头像（PNG）

---

### 2. 2D 头像接口

#### 2.1 Java 版 - 按用户名

* **请求方式**：`GET`
* **路径**：`/2d/java/username/:username`
* **参数说明**：

  * `username`：玩家用户名
* **返回**：玩家 2D 头像（PNG）

#### 2.2 Java 版 - 按 UUID

* **请求方式**：`GET`
* **路径**：`/2d/java/uuid/:uuid`
* **参数说明**：

  * `uuid`：玩家 UUID
* **返回**：玩家 2D 头像（PNG）

#### 2.3 基岩版 - 按用户名

* **请求方式**：`GET`
* **路径**：`/2d/bedrock/username/:username`
* **参数说明**：

  * `username`：玩家 Gamertag
* **返回**：玩家 2D 头像（PNG）

#### 2.4 基岩版 - 按 UUID

* **请求方式**：`GET`
* **路径**：`/2d/bedrock/uuid/:uuid`
* **参数说明**：

  * `uuid`：玩家 UUID
* **返回**：玩家 2D 头像（PNG）

---

## 示例

* 请求 Java 用户名 3D 头像：

  ```
  GET /3d/java/username/AliceIClodia
  ```
* 请求 Bedrock UUID 2D 头像：

  ```
  GET /2d/bedrock/uuid/00000000-0000-0000-0009-01fbe62f1367
  ```

---
