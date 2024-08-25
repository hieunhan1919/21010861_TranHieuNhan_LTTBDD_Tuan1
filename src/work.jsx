import React from 'react';

const Baitap = () => {
  // Hàm tính toán
  const inSoTu1Den10 = () => {
    const nums = [];
    for (let i = 1; i <= 10; i++) {
      nums.push(i);
    }
    return nums;
  };

  const inSoLeTu1Den99 = () => {
    const odds = [];
    for (let i = 1; i < 100; i += 2) {
      odds.push(i);
    }
    return odds;
  };

  const bangCuuChuong7 = () => {
    const table = [];
    for (let i = 1; i <= 10; i++) {
      table.push(`7 x ${i} = ${7 * i}`);
    }
    return table;
  };

  const inTatCaBangCuuChuong = () => {
    const tables = [];
    for (let i = 1; i <= 10; i++) {
      let table = [];
      for (let j = 1; j <= 10; j++) {
        table.push(`${i} x ${j} = ${i * j}`);
      }
      tables.push(table);
    }
    return tables;
  };

  const tinhTongSoTu1Den10 = () => {
    let sum = 0;
    for (let i = 1; i <= 10; i++) {
      sum += i;
    }
    return sum;
  };

  const tinhGiaiThua = (n) => {
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  };

  const tinhTongSoChanTu12Den30 = () => {
    let sum = 0;
    for (let i = 12; i <= 30; i += 2) {
      sum += i;
    }
    return sum;
  };

  const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5 / 9;

  const tinhTongMang = (arr) => arr.reduce((acc, num) => acc + num, 0);

  const tinhTrungBinhMang = (arr) => tinhTongMang(arr) / arr.length;

  const locSoDuong = (arr) => arr.filter(num => num > 0);
  const timMax = (arr) => Math.max(...arr);
  const fibonacci = (n) => {
    let fibo = [0, 1];
    for (let i = 2; i < n; i++) {
      fibo.push(fibo[i - 1] + fibo[i - 2]);
    }
    return fibo;
  };
  const fibonacciDeQuy = (n) => {
    if (n <= 1) return n;
    return fibonacciDeQuy(n - 1) + fibonacciDeQuy(n - 2);
  };
  const kiemTraSoNguyenTo = (n) => {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  };
  const tongChuSo = (n) => {
    return n.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
  };
  const in100SoNguyenTo = () => {
    const primes = [];
    let num = 2;
    while (primes.length < 100) {
      if (kiemTraSoNguyenTo(num)) {
        primes.push(num);
      }
      num++;
    }
    return primes;
  };
  const timSoNguyenToLonHon = (n, p) => {
    const primes = [];
    let num = n + 1;
    while (primes.length < p) {
      if (kiemTraSoNguyenTo(num)) {
        primes.push(num);
      }
      num++;
    }
    return primes;
  };
  const xoayTrai = (arr) => {
    return [...arr.slice(1), arr[0]];
  };
  const xoayPhai = (arr) => {
    return [arr[arr.length - 1], ...arr.slice(0, arr.length - 1)];
  };
  const daoNguocMang = (arr) => arr.reverse();
  const daoNguocChuoi = (str) => str.split('').reverse().join('');
  const gopMang = (arr1, arr2) => [...arr1, ...arr2];
  const phanTuKhongChung = (arr1, arr2) => arr1.filter(x => !arr2.includes(x));
  const phanTuKhongChungThu2 = (arr1, arr2) => arr1.filter(x => !arr2.includes(x));

  // Gọi các hàm và lưu kết quả vào biến
  const numbers = inSoTu1Den10();
  const oddNumbers = inSoLeTu1Den99();
  const multiplicationTable7Result = bangCuuChuong7();
  const allMultiplicationTables = inTatCaBangCuuChuong();
  const sumNumbersResult = tinhTongSoTu1Den10();
  const factorialResult = tinhGiaiThua(10);
  const sumEvenNumbersResult = tinhTongSoChanTu12Den30();
  const fahrenheitToCelsiusResult = fahrenheitToCelsius(86);
  const sumArrayResult = tinhTongMang([1, 2, 3, 4, 5]);
  const averageArrayResult = tinhTrungBinhMang([1, 2, 3, 4, 5]);

  const positiveNumbers = locSoDuong([-1, 2, 3, -4, 5]);
  const maxNumber = timMax([1, 2, 3, 4, 5]);
  const first10Fibonacci = fibonacci(10);
  const nthFibonacci = fibonacciDeQuy(10);
  const isPrime = kiemTraSoNguyenTo(17);
  const digitSum = tongChuSo(123);
  const first100Primes = in100SoNguyenTo();
  const primesAfterN = timSoNguyenToLonHon(10, 5);
  const rotatedLeft = xoayTrai([1, 2, 3, 4, 5]);
  const rotatedRight = xoayPhai([1, 2, 3, 4, 5]);
  const reversedArray = daoNguocMang([1, 2, 3, 4, 5]);
  const reversedString = daoNguocChuoi("hello");
  const mergedArray = gopMang([1, 2], [3, 4]);
  const uniqueInFirstArray = phanTuKhongChung([1, 2, 3], [3, 4]);
  const elementsNotInSecond = phanTuKhongChungThu2([1, 2, 3], [3, 4]);

  return (
    <div>
      <h1>Lab1</h1>
      <div>
        <h2>1. Số từ 1 đến 10:</h2>
        <p>{numbers.join(', ')}</p>
      </div>
      <div>
        <h2>2. Số lẻ từ 1 đến 99:</h2>
        <p>{oddNumbers.join(', ')}</p>
      </div>
      <div>
        <h2>3. Bảng cửu chương 7:</h2>
        <p>{multiplicationTable7Result.join(', ')}</p>
      </div>
      <div>
        <h2>4. Tất cả bảng cửu chương:</h2>
        {allMultiplicationTables.map((table, index) => (
          <div key={index}>
            <h3>Bảng {index + 1}</h3>
            <p>{table.join(', ')}</p>
          </div>
        ))}
      </div>
      <div>
        <h2>5. Tổng số từ 1 đến 10:</h2>
        <p>{sumNumbersResult}</p>
      </div>
      <div>
        <h2>6. Giai thừa của 10:</h2>
        <p>{factorialResult}</p>
      </div>
      <div>
        <h2>7. Tổng số chẵn từ 12 đến 30:</h2>
        <p>{sumEvenNumbersResult}</p>
      </div>
      <div>
        <h2>8. Chuyển đổi Fahrenheit sang Celsius (86°F):</h2>
        <p>{fahrenheitToCelsiusResult} °C</p>
      </div>
      <div>
        <h2>9. Tổng của mảng [1, 2, 3, 4, 5]:</h2>
        <p>{sumArrayResult}</p>
      </div>
      <div>
        <h2>10. Trung bình của mảng [1, 2, 3, 4, 5]:</h2>
        <p>{averageArrayResult}</p>
      </div>
      <div>
        <h2>11. Số dương trong mảng [-1, 2, 3, -4, 5]:</h2>
        <p>{positiveNumbers.join(', ')}</p>
      </div>
      <div>
        <h2>12. Số lớn nhất trong mảng [1, 2, 3, 4, 5]:</h2>
        <p>{maxNumber}</p>
      </div>
      <div>
        <h2>13. 10 số Fibonacci đầu tiên:</h2>
        <p>{first10Fibonacci.join(', ')}</p>
      </div>
      <div>
        <h2>14. Số Fibonacci thứ 10:</h2>
        <p>{nthFibonacci}</p>
      </div>
      <div>
        <h2>15. Kiểm tra số nguyên tố (17):</h2>
        <p>{isPrime ? "Là số nguyên tố" : "Không phải là số nguyên tố"}</p>
      </div>
      <div>
        <h2>16. Tổng các chữ số của 123:</h2>
        <p>{digitSum}</p>
      </div>
      <div>
        <h2>17. 100 số nguyên tố đầu tiên:</h2>
        <p>{first100Primes.join(', ')}</p>
      </div>
      <div>
        <h2>18. 5 số nguyên tố lớn hơn 10:</h2>
        <p>{primesAfterN.join(', ')}</p>
      </div>
      <div>
        <h2>19. Mảng sau khi xoay trái [1, 2, 3, 4, 5]:</h2>
        <p>{rotatedLeft.join(', ')}</p>
      </div>
      <div>
        <h2>20. Mảng sau khi xoay phải [1, 2, 3, 4, 5]:</h2>
        <p>{rotatedRight.join(', ')}</p>
      </div>
      <div>
        <h2>21. Mảng đảo ngược [1, 2, 3, 4, 5]:</h2>
        <p>{reversedArray.join(', ')}</p>
      </div>
      <div>
        <h2>22. Chuỗi "hello" sau khi đảo ngược:</h2>
        <p>{reversedString}</p>
      </div>
      <div>
        <h2>23. Gộp mảng [1, 2] và [3, 4]:</h2>
        <p>{mergedArray.join(', ')}</p>
      </div>
      <div>
        <h2>24. Phần tử không chung giữa [1, 2, 3] và [3, 4]:</h2>
        <p>{uniqueInFirstArray.join(', ')}</p>
      </div>
      <div>
        <h2>25. Các phần tử không có trong mảng thứ hai [1, 2, 3] và [3, 4]:</h2>
        <p>{elementsNotInSecond.join(', ')}</p>
      </div>
    </div>
  );
};

export default Baitap;
