## [204. Count Primes](https://leetcode.com/problems/count-primes/#/description)

### Description

Count the number of prime numbers less than a non-negative number, **n**.

**Difficulty:** `Easy`

**Tags:** `Hash Table` `Math`

**Hint:**

1. Let's start with a _isPrime_ function. To determine if a number is prime, we need to check if it is not divisible by any number less than _n_. The runtime complexity of _isPrime_ function would be O(_n_) and hence counting the total prime numbers up to _n_ would be O(*n*2). Could we do better?

2. As we know the number must not be divisible by any number > _n_ / 2, we can immediately cut the total iterations half by dividing only up to _n_ / 2. Could we still do better?

3. Let's write down all of 12's factors:

   ```
   2 × 6 = 12
   3 × 4 = 12
   4 × 3 = 12
   6 × 2 = 12
   ```

   As you can see, calculations of 4 × 3 and 6 × 2 are not necessary. Therefore, we only need to consider factors up to √*n* because, if _n_ is divisible by some number _p_, then _n_ = _p_ × _q_ and since _p_ ≤ _q_, we could derive that _p_ ≤ √*n*.

   Our total runtime has now improved to O(*n*1.5), which is slightly better. Is there a faster approach?

   ```java
   public int countPrimes(int n) {
      int count = 0;
      for (int i = 1; i < n; i++) {
         if (isPrime(i)) count++;
      }
      return count;
   }

   private boolean isPrime(int num) {
      if (num <= 1) return false;
      // Loop's ending condition is i * i <= num instead of i <= sqrt(num)
      // to avoid repeatedly calling an expensive function sqrt().
      for (int i = 2; i * i <= num; i++) {
         if (num % i == 0) return false;
      }
      return true;
   }
   ```

4. The [Sieve of Eratosthenes](http://en.wikipedia.org/wiki/Sieve_of_Eratosthenes) is one of the most efficient ways to find all prime numbers up to _n_. But don't let that name scare you, I promise that the concept is surprisingly simple.

   ![img](https://leetcode.com/static/images/solutions/Sieve_of_Eratosthenes_animation.gif)
   Sieve of Eratosthenes: algorithm steps for primes below 121. "[Sieve of Eratosthenes Animation](http://commons.wikimedia.org/wiki/File:Sieve_of_Eratosthenes_animation.gif)" by [SKopp](http://de.wikipedia.org/wiki/Benutzer:SKopp) is licensed under [CC BY 2.0](http://creativecommons.org/licenses/by/2.0/).

   We start off with a table of _n_ numbers. Let's look at the first number, 2. We know all multiples of 2 must not be primes, so we mark them off as non-primes. Then we look at the next number, 3. Similarly, all multiples of 3 such as 3 × 2 = 6, 3 × 3 = 9, ... must not be primes, so we mark them off as well. Now we look at the next number, 4, which was already marked off. What does this tell you? Should you mark off all multiples of 4 as well?

5. 4 is not a prime because it is divisible by 2, which means all multiples of 4 must also be divisible by 2 and were already marked off. So we can skip 4 immediately and go to the next number, 5. Now, all multiples of 5 such as 5 × 2 = 10, 5 × 3 = 15, 5 × 4 = 20, 5 × 5 = 25, ... can be marked off. There is a slight optimization here, we do not need to start from 5 × 2 = 10. Where should we start marking off?

6. In fact, we can mark off multiples of 5 starting at 5 × 5 = 25, because 5 × 2 = 10 was already marked off by multiple of 2, similarly 5 × 3 = 15 was already marked off by multiple of 3. Therefore, if the current number is _p_, we can always mark off multiples of _p_ starting at *p*2, then in increments of _p_: *p*2 + _p_, *p*2 + 2*p*, ... Now what should be the terminating loop condition?

7. It is easy to say that the terminating loop condition is _p_ < _n_, which is certainly correct but not efficient. Do you still remember _Hint #3_?

8. Yes, the terminating loop condition can be _p_ < √*n*, as all non-primes ≥ √*n* must have already been marked off. When the loop terminates, all the numbers in the table that are non-marked are prime.

   The Sieve of Eratosthenes uses an extra O(_n_) memory and its runtime complexity is O(_n_ log log _n_). For the more mathematically inclined readers, you can read more about its algorithm complexity on [Wikipedia](http://en.wikipedia.org/wiki/Sieve_of_Eratosthenes#Algorithm_complexity).

   ```java
   public int countPrimes(int n) {
      boolean[] isPrime = new boolean[n];
      for (int i = 2; i < n; i++) {
         isPrime[i] = true;
      }
      // Loop's ending condition is i * i < n instead of i < sqrt(n)
      // to avoid repeatedly calling an expensive function sqrt().
      for (int i = 2; i * i < n; i++) {
         if (!isPrime[i]) continue;
         for (int j = i * i; j < n; j += i) {
            isPrime[j] = false;
         }
      }
      int count = 0;
      for (int i = 2; i < n; i++) {
         if (isPrime[i]) count++;
      }
      return count;
   }
   ```

   ```c++
   class Solution {
   public:
       int countPrimes(int n) {
           vector<bool> isPrime(n, true);
           for (size_t i = 2; i < sqrt(n); i++)
           {
               if (isPrime[i])
               {
                   for (size_t j = i * i; j < n; j += i)
                   {
                       isPrime[j] = false;
                   }
               }
           }
           int count = 0;
           for (size_t i = 2; i < n; i++)
           {
               if (isPrime[i])
               {
                   ++count;
               }
           }
           return count;
       }
   };
   ```
