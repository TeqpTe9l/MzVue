<template>
    <div class="container">
    <div class="create-post">
        <h4>Добавить нового учителя</h4>
        <form method="POST">
            <input type="string" class="form-control" placeholder="Введите фамилию"        name="fam"  v-model="teacherdata.Фамилия">
            <input type="string" class="form-control" placeholder="Введите имя"            name="name" v-model="teacherdata.Имя">
            <input type="string" class="form-control" placeholder="Введите отчество"       name="oth"  v-model="teacherdata.Отчество">
            <input type="date"   class="form-control" placeholder="Введите дату рождения"  name="dr"   v-model="teacherdata.Дата_рождения">
            <input type="double" class="form-control" placeholder="Введите должность"      name="dol"  v-model="teacherdata.Должность">
            <input type="string" class="form-control" placeholder="Введите зарплату"       name="zp"   v-model="teacherdata.Заплата">
            <input type="string" class="form-control" placeholder="Введите номер телефона" name="nom"  v-model="teacherdata.Номер_телефона">
            <input type="string" class="form-control" placeholder="Введите стаж"           name="sta"  v-model="teacherdata.Стаж">
            <input type="string" class="form-control" placeholder="Введите Адрес"          name="adr"  v-model="teacherdata.Адрес">
                <div class="input-group-append">
                   <input @click="CreateTeacher(); getteacher()" type="submit" value="Добавить">
                </div>
        </form>
    </div>
</div>

</template>

<script>
export default {
    data() {
        return { 
            teacherdata: {},
            teachers: [],
        }
    },
    methods: {
        async getteacher() {
            let result = await fetch ("http://localhost:3000/teacher");
            this.teachers = await result.json();
        },
        async CreateTeacher() {
            fetch("http://localhost:3000/teacher/CreateTeacher", {
                method: "POST",
                headers: {
                    accept: "application/json",
                    "content-type": "application/json",
                },
                body: JSON.stringify(this.teacherdata),
            });
        },
    },
    mounted() {
        this.getteacher();
    },
}
</script>