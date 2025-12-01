# Заснеживание
> [!IMPORTANT]  
> **Статус**: Поддерживается <br>
> **Минимальная версия**: IX-Ray Platform 1.3

Заснеживание - это динамическое нанесения снега на поверхности, которые не попадают под `outdoor`. 
Для активации перейдите в файл **engine_external.ltx** и установите свойство `UseDynamicSnowMask` в `true`:
```ini
UseDynamicSnowMask = true
```

## Заснеживание: Динамика
* Для заснеживания на динамике нужно создавать дополнительную текстурную маску с подписью `_snowmask`. 
<img width="275" height="61" alt="image" src="https://github.com/user-attachments/assets/c747eab5-5e45-4f61-8201-6ab63104f7a9" />

* Примерный вид маски
<img width="637" height="675" alt="image" src="https://github.com/user-attachments/assets/1a4fdd66-5872-45fb-b7a0-6cdb8785a4be" />

* Само заснеживание хранится в зелёном канале текстуры
<img width="547" height="598" alt="image" src="https://github.com/user-attachments/assets/05e7212a-6c43-4800-ab7b-218990b67ffe" />
<img width="548" height="596" alt="image" src="https://github.com/user-attachments/assets/77c878e5-6f46-4499-8cb6-b9852a6f71f3" />

## Заснеживание: Статика
* Статика не требует каких-либо дополнительных масок, кроме `textures/shaders/snowmask/snow.dds`
<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/1c19bdac-94d1-4e69-8a7d-6fc0dbbc8399" />
