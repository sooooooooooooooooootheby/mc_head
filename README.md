<img src="https://mc-head.vercel.app/3d/java/uuid/90b27e82-deac-4e85-9155-10b055878ca9" alt="head" style="width=32px; height=32px;" align='center' width="128" height="128" >

# MC head

这是一个可以获取我的世界玩家 3d 或者 2d 头颅图片的 api.

使用`JavaScript`编写.

如何使用api请看 https://mchead.s22y.moe/

---

## 部署

```
git clone https://github.com/sooooooooooooooooootheby/mc_head.git

cd mc_head

pnpm i

node ./src/server.js
```

## 调试

如果你对输出的图片不满意, 在 clone 之后可以直接打开 `./src/test` 的js文件, 在修改参数之后直接 `run code` 就会处理同目录下的 `input.png` 皮肤, 处理完成保存文件为 `output.png`.

一般裁切位置不用修改, 除非麻将修改了皮肤文件.

倾斜用的矩阵是一个 2×2：

```
[[a, b],
 [c, d]]
```

* `a`：水平缩放，数值大于 1 会拉宽，0.8 左右会压窄。
* `b`：水平倾斜随 y 改变，>0 向右斜，<0 向左斜。
* `c`：垂直倾斜随 x 改变，负值会让上方收窄（产生透视感），正值相反。
* `d`：垂直缩放，<1 压扁（上短下长），>1 拉长。
