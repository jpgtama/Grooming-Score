import { assert, expect } from 'chai';
import databus from './databus.js'


describe('import', ()=>{
  describe('exist', ()=>{
    it('should exist', ()=>{
      assert.exists(databus);
    })
  })

  describe('is an object', ()=>{
    it('should return an object after import', ()=>{
      assert.isObject(databus)
    })
  })
})


describe('property', ()=>{
  describe('getTaskList', ()=>{
      it('should exist', ()=>{
          assert.property(databus, 'getTaskList')
      })

      it('should be of type function', ()=>{
          assert.isFunction(databus.getTaskList)
      })

      it('returned value should be an array', ()=>{
         assert.isArray(databus.getTaskList())
      })
  })
})
