export const Random = (input1) => {
  let arr = [];
  for (let i = 0; i <= 100; i++) {
    const resault = Math.abs(Math.round(Math.random() * i));
    arr.push(resault);
  }
  const tekrar = [...new Set(arr)];
  return tekrar;
};

export const modifyArray = (...nums) => {
  const resault = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      resault.push(nums[i] * 2);
    } else {
      resault.push(nums[i] * 3);
    }
  }
  return resault;
};
