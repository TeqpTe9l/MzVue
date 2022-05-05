<template>
    <table class="table table-striped table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Фамилия</th>
      <th scope="col">Имя</th>
      <th scope="col">Отчество</th>
      <th scope="col">Дата рождения</th>
      <th scope="col">Должность</th>
      <th scope="col">Зарплата</th>
      <th scope="col">Номер телефона</th>
      <th scope="col">Стаж</th>
      <th scope="col">Адрес</th>
      <th><a href="/createteacher" target="_self" class="nav-link text-light"><i class="fas fa-pen"></i> Добавить</a></th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="teacher in teachers" :key="teacher">
      <th scope="row">{{teacher.id}}</th>
      <td>{{ teacher.Фамилия}}</td>
      <td>{{ teacher.Имя}}</td>
      <td>{{ teacher.Отчество}}</td>
      <td>{{ teacher.Дата_рождения}}</td>
      <td>{{ teacher.Должность}}</td>
      <td>{{ teacher.Зарплата}}</td>
      <td>{{ teacher.Номер_телефона}}</td> 
      <td>{{ teacher.Стаж}}</td>
      <td>{{ teacher.Адрес}}</td>
        <td>
          
        </td>       
    </tr>
  </tbody>
</table>
</template>

<script>
export default {
    data() {
        return {
            teacherdata: {},
            teachers: [],
        };
    },
    methods: {
        async getteacher() {
            let result = await fetch ("http://localhost:3000/teacher");
            this.teachers = await result.json();
        },
        
    },
    mounted() {
        this.getteacher();
    },
};
</script>