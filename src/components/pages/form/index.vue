<template>
  <table>
    <RowSet
      title="名前"
      placeholder="名前を入力してください"
      :prop-value.sync="postObject.name"
      @update:propValue="setName"
    />
    <RowSet
      title="電話番号"
      placeholder="090-1234-5678"
      :prop-value.sync="postObject.tel"
    />
    <RowSet
      title="住所"
      placeholder="東京都港区2-2-2"
      :prop-value.sync="postObject.address"
    />
  </table>
</template>

<script>
import RowSet from '../../parts/table/rowSet/index';
export default {
  components: {
    RowSet
  },
  data() {
    return {
      postObject: {
        name: '',
        tel: '',
        address: ''
      }
    };
  },
  methods: {
    setName(value) {
      console.log(value);
    },
    setTel(value) {
      this.postObject.tel = value;
    },
    setAddress(value) {
      this.postObject.address = value;
    }
  }
};
</script>

<style></style>
