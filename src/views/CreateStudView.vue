<template>
   <div class="container">
    <div class="create-post">
        <h4>Добавить нового обучающегося</h4>
        <form method="POST">
            <input type="string" class="form-control" placeholder="Введите фамилию"         name="fam"  v-model="studdata.Фамилия">
            <input type="string" class="form-control" placeholder="Введите имя"             name="name" v-model="studdata.Имя">
            <input type="string" class="form-control" placeholder="Введите отчество"        name="oth"  v-model="studdata.Отчество">
            <input type="date"   class="form-control" placeholder="Введите дату рождения"   name="dr"   v-model="studdata.Дата_рождения">
            <input type="double" class="form-control" placeholder="Введите адрес"           name="adr"  v-model="studdata.Адрес">
            <input type="string" class="form-control" placeholder="Введите номер телефона"  name="nom"  v-model="studdata.Номер_телефона">
            <input type="string" class="form-control" placeholder="Введите класс"           name="klas" v-model="studdata.Класс">
            <input type="string" class="form-control" placeholder="Введите балл учащегося"  name="ball" v-model="studdata.Балл_учащегося">
            <input type="string" class="form-control" placeholder="Введите Срок обучения"   name="srok" v-model="studdata.Срок_обучения">
                <div class="input-group-append">
                    <input @click="CreateStud(); getstud()" type="submit" value="Добавить">
                </div>
        </form>
    </div>
</div>
 
</template>

<script>
export default {
    data() {
        return { 
            studdata: {},
            studs: [],
        }
    },
    methods: {
        async getstud() {
            let result = await fetch ("http://localhost:3000/stud");
            this.studs = await result.json();
        },
        async CreateStud() {
            fetch("http://localhost:3000/stud/CreateStud", {
                method: "POST",
                headers: {
                    accept: "application/json",
                    "content-type": "application/json",
                },
                body: JSON.stringify(this.studdata),
            });
        },
    },
    mounted() {
        this.getstud();
    },
}
</script>