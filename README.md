Menggunakan `click` event listener element h3 untuk toggle tampilan sibling (konten penjelasan) dengan style `display:none`. Akan menandai item dengan class "inactive" dan "active".

Hamburger button ditampilkan menggunakan `Unicode Character/HTML Entity` dan akan tampil ketika mediaquery mendeteksi lebar window kecil. Komponen ini dibungkus dalam tag label yang mengarah ke checkbox dengan `display:none`.

Kemudian, checkbox akan diperiksa. Jika `checked` maka akan menerapkan ke element siblingnya (~) yang memiliki class menu menjadi `display:block`

```
input[type=checkbox]:checked ~ .menu{
        display: block;
    }
```
