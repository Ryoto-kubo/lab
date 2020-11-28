import RowSet from '@/components/parts/table/rowSet/index';
import { shallowMount } from '@vue/test-utils';
// let wrapper;

// // 子compnentの定義
// beforeEach(() => {
//   wrapper = shallowMount(RowSet);
// });

// // テスト後の処理をかく
// afterEach(() => {
//   wrapper.destroy();
// });

describe('RowSet Test', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallowMount(RowSet, {
      propsData: {
        title: 'kubo',
        placeholder: 'baz',
        propValue: 'baz'
      }
    });
  });

  describe('standard', () => {
    it('RowSet test', () => {
      expect(wrapper.isVueInstance).toBeTruthy();
    });
  });
  describe('Testing emitted', () => {
    it('RowSet emitted', () => {
      wrapper.vm.$emit('update:propValue', wrapper.vm.$props.title);
    });
  });
});
