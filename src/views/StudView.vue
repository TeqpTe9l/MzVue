<template>
<div class="container">
<table class="table table-striped table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Фамилия</th>
      <th scope="col">Имя</th>
      <th scope="col">Отчество</th>
      <th scope="col">Дата рождения</th>
      <th scope="col">Адрес</th>
      <th scope="col">Номер телефона</th>
      <th scope="col">Класс</th>
      <th scope="col">Балл учащегося</th>
      <th scope="col">Срок обучения</th>
      <th><a href="/createstud" target="_self" class="nav-link text-light"><i class="fas fa-pen"></i> Добавить</a></th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="stud in studs" :key="stud">
      <th scope="row">{{ stud.id}}</th>
      <td>{{ stud.Фамилия}}</td>
      <td>{{ stud.Имя}}</td>
      <td>{{ stud.Отчество}}</td>
      <td>{{ stud.Дата_рождения}}</td>
      <td>{{ stud.Адрес}}</td>
      <td>{{ stud.Номер_телефона}}</td>
      <td>{{ stud.Класс}}</td> 
      <td>{{ stud.Балл_учащегося}}</td>
      <td>{{ stud.Срок_обучения}}</td>
        <td>
            <input @click="DeleteStud(stud.id); getstud();" type="submit" value="Удалить"> 
        </td>       
    </tr>
  </tbody>
</table>
</div>
</template>

<script>
export default {
    data() {
        return {
            studdata: {},
            studs: [],
        };
    },
    methods: {
        async getstud() {
            let result = await fetch ("http://localhost:3000/stud");
            this.studs = await result.json();
        },
        async DeleteStud(id){
          await fetch ("http://localhost:3000/stud/DeleteStud/" + id);
        }
    },
    mounted() {
        this.getstud();
    },
};
</script>