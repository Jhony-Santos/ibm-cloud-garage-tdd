


describe('the stack canary spec', () => {
  it('shows the infrastructure works', () => {
    expect(true).toBe(true);
  });
});

const stackFactory = (capacity = 2) => {

  if(capacity < 1) throw new Error('invalid capacity')
  let elements=[]

  return {
    isEmpty: () => elements.length === 0,
    size: () => elements.length,
    push: (element) => {
      if (elements.length === capacity) throw new Error('capacity overflow error');
         elements.push(element)
    },
    pop: () => {
      if (elements.length === 0) throw new Error('capacity underflow error');
           return elements.pop()
    }
  }
};
let stack


describe('a stack', () => {
  //functions
  //behavior of functions

  it('starts empty',()=>{
    stack=stackFactory();
    expect(stack.isEmpty()).toBe(true);
  });
  it('starts with stack size of 0',()=>{
    stack=stackFactory();
    expect(stack.size()).toBe(0);
  });
  it('is not empty when pushed',()=>{
    stack=stackFactory();
    stack.push();
    expect(stack.isEmpty()).toBe(false);
  });
  it('stack size is 1 when pushed',()=>{
    stack=stackFactory();
    stack.push();
    expect(stack.size()).toBe(1);
  });
  it('stack is empty when pushed and popped',()=>{
    stack=stackFactory();
    stack.push();
    stack.pop();
    expect(stack.size()).toBe(0);
  });
  it('throws overflow error when pushing to a stack at full capacity',()=>{
      stack.push();
      stack.push();
      expect(()=>{
          stack.push();
      }).toThrowError('capacity overflow error');
  });
  it('throw underflow error when popping an empty stack', () => {
    expect(() => {
      stack=stackFactory();
      stack.pop();
    }).toThrowError('capacity underflow error');
  });
  it('pops the same one item when pushed',()=>{
      stack.push('a')
      expect(stack.pop()).toBe('a')
  })
   it('pops two itens with the most recent first',()=>{
       stack.push('1')
       stack.push('2')
        expect(stack.pop()).toBe('2')
        expect(stack.pop()).toBe('1')
   })
    it('accepts only a positive capacity',()=>{
        expect(()=>{
            stack=stackFactory(-1)
        }).toThrowError('invalid capacity')
    })



  it.todo('starts empty');
  it.todo('starts with stack size of 0');
  it.todo('is not empty when pushed');
  it.todo('stack size is 1 when pushed');
  it.todo('stack is empty when pushed and popped');
  it.todo('stack size is 0 when pushed and popped');
  it.todo('throws overflow error when pushing to a stack at full capacity');
  it.todo('throw underflow error when popping an empty stack');
  it.todo('pops the same one item when pushed');
  it.todo('pops two items with the most recent first');
  it.todo('accepts only a positive capacity');
});