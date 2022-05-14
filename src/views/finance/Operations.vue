<template>
  <div>
    <h1>Операции</h1>
    <div>Добавить операцию</div>
    <div><s-input class="border" type="text" />+-</div>
    <div><input class="border" type="text" placeholder="Категория (select)"></div>
    <div><s-button type="primary" class="font-medium px-2">Добавить</s-button></div>
  </div>
</template>

<script>
export default {
  name: 'FinanceOperations'
}
</script>