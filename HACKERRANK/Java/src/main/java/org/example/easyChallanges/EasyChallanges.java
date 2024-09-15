package org.example.easyChallanges;

import java.util.Locale;
import java.util.Scanner;

public class EasyChallanges {
    /*  FIRST CHALLANGE
        Welcome to the world of Java! In this challenge, we practice printing to stdout.

        The code stubs in your editor declare a Solution class and a main method. Complete the main method by copying
        the two lines of code below and pasting them inside the body of your main method.

        System.out.println("Hello, World.");
        System.out.println("Hello, Java.");

        Input Format

        There is no input for this challenge.

        Output Format

        You must print two lines of output:

        Print Hello, World. on the first line.
        Print Hello, Java. on the second line.

        Sample Output

        Hello, World.
        Hello, Java.
     */
    public static void firstChallange() {
        System.out.println("Hello, World.");
        System.out.println("Hello, Java.");
    }

    /*  SECOND CHALLANGE
        Most HackerRank challenges require you to read input from stdin (standard input) and write output to stdout (standard output).

        One popular way to read input from stdin is by using the Scanner class and specifying the Input Stream as System.in.
        For example:

        Scanner scanner = new Scanner(System.in);
        String myString = scanner.next();
        int myInt = scanner.nextInt();
        scanner.close();

        System.out.println("myString is: " + myString);
        System.out.println("myInt is: " + myInt);

        The code above creates a Scanner object named  and uses it to read a String and an int.
        It then closes the Scanner object because there is no more input to read, and prints to stdout using System.out.println(String).
        So, if our input is:

        Hi 5
        Our code will print:

        myString is: Hi
        myInt is: 5

        Task
        In this challenge, you must read  integers from stdin and then print them to stdout. Each integer must be printed on a new line.
        To make the problem a little easier, a portion of the code is provided for you in the editor below.

        Input Format

        There are  lines of input, and each line contains a single integer.

        Sample Input

        42
        100
        125
        Sample Output

        42
        100
        125
     */
    public static void secondChallange() {
        Scanner scanner = new Scanner(System.in);
        int firstNumber = scanner.nextInt();
        int secondNumber = scanner.nextInt();
        int thirdNumber = scanner.nextInt();
        scanner.close();

        System.out.println(firstNumber);
        System.out.println(secondNumber);
        System.out.println(thirdNumber);
    }

    /*  THIRD CHALLANGE
        Task
        Given an integer, n, perform the following conditional actions:

        If n is odd, print Weird
        If n is even and in the inclusive range of  to , print Not Weird
        If n is even and in the inclusive range of  to , print Weird
        If n is even and greater than , print Not Weird
        Complete the stub code provided in your editor to print whether or not n is weird.

        Input Format

        A single line containing a positive integer, n.

        Constraints

         1 <= n <= 100

        Output Format

        Print Weird if the number is weird; otherwise, print Not Weird.

        Sample Input 0

        3
        Sample Output 0

        Weird
        Sample Input 1

        24
        Sample Output 1

        Not Weird
    */
    public static void thirdChallange() {
        Scanner scanner = new Scanner(System.in);
        int number = scanner.nextInt();
        scanner.close();

        boolean isOdd = (number % 2) > 0;

        if (isOdd) System.out.println("Weird");
        if (!isOdd && (number >= 2 && number <= 5)) System.out.println("Not Weird");
        if (!isOdd && (number >= 6 && number <= 20)) System.out.println("Weird");
        if (!isOdd && number > 20) System.out.println("Not Weird");
    }


    /*  FOURTH CHALLANGE
        In this challenge, you must read an integer, a double, and a String from stdin,
        then print the values according to the instructions in the Output Format section below.
        To make the problem a little easier, a portion of the code is provided for you in the editor.

        Note: We recommend completing Java Stdin and Stdout I before attempting this challenge.

        Input Format

        There are three lines of input:

        The first line contains an integer.
        The second line contains a double.
        The third line contains a String.
        Output Format

        There are three lines of output:

        On the first line, print String: followed by the unaltered String read from stdin.
        On the second line, print Double: followed by the unaltered double read from stdin.
        On the third line, print Int: followed by the unaltered integer read from stdin.
        To make the problem easier, a portion of the code is already provided in the editor.

        Note: If you use the nextLine() method immediately following the nextInt() method, recall that nextInt() reads integer tokens; because of this, the last newline character for that line of integer input is still queued in the input buffer and the next nextLine() will be reading the remainder of the integer line (which is empty).

        Sample Input

        42
        3.1415
        Welcome to HackerRank's Java tutorials!
        Sample Output

        String: Welcome to HackerRank's Java tutorials!
        Double: 3.1415
        Int: 42
    */
    public static void fourthChallange() {
        Scanner scanner = new Scanner(System.in).useLocale(Locale.US);
        int firstNumber = scanner.nextInt();
        double secondNumber = scanner.nextDouble();
        scanner.nextLine();
        String text = scanner.nextLine();
        scanner.close();

        System.out.println("String: " + text);
        System.out.println("Double: " + secondNumber);
        System.out.println("Int: " + firstNumber);
    }

    /*  FIFTH CHALLANGE
        Java's System.out.printf function can be used to print formatted output. The purpose of this exercise is to test your understanding of formatting output using printf.

        To get you started, a portion of the solution is provided for you in the editor; you must format and print the input to complete the solution.

        Input Format

        Every line of input will contain a String followed by an integer.
        Each String will have a maximum of  alphabetic characters, and each integer will be in the inclusive range from  to .

        Output Format

        In each line of output there should be two columns:
        The first column contains the String and is left justified using exactly  characters.
        The second column contains the integer, expressed in exactly  digits; if the original input has less than three digits, you must pad your output's leading digits with zeroes.

        Sample Input

        java 100
        cpp 65
        python 50
        Sample Output

        ================================
        java           100
        cpp            065
        python         050
        ================================
    */
    public static void fifthChallange() {
        Scanner scanner = new Scanner(System.in);
        String[] names = new String[3];
        int[] numbers = new int[3];
        for (int i = 0; i < 3; i++) {
            String text = scanner.next();
            int firstNumber = scanner.nextInt();
            names[i] = text;
            numbers[i] = firstNumber;
        }

        System.out.println("================================");
        for(int i = 0; i < 3; i++){
            System.out.printf("%-15s%03d\n", names[i], numbers[i]);
        }
        System.out.println("================================");
        scanner.close();
    }

    /*
        Objective
        In this challenge, we're going to use loops to help us do some simple math.

        Task
        Given an integer, , print its first  multiples. Each multiple N * i (where 1 <= i <= 100)
        should be printed on a new line in the form: N x i = result.

        Input Format

        A single integer, N.

        Constraints

        2 <= N <= 20

        Output Format

        Print  lines of output; each line  (where ) contains the  of  in the form:
        N x i = result.

        Sample Input

        2
        Sample Output

        2 x 1 = 2
        2 x 2 = 4
        2 x 3 = 6
        2 x 4 = 8
        2 x 5 = 10
        2 x 6 = 12
        2 x 7 = 14
        2 x 8 = 16
        2 x 9 = 18
        2 x 10 = 20
    */

    public static void sixthChallange() {
        Scanner scanner = new Scanner(System.in);
        int firstNumber = scanner.nextInt();
        for (int i = 1; i <= 10; i++) {
            System.out.println(firstNumber + " x " + i + " = " + (firstNumber * i));
        }
        scanner.close();
    }

    /*
        We use the integers a, b, and  to create the following series:

        (a + 2^0 * b), (a + 2^0 * b),..., (a + 2^0 * b * b + ... + 2^n-1 * b)

        You are given  queries in the form of , , and . For each query, print the series corresponding to the given , , and  values as a single line of  space-separated integers.

        Input Format

        The first line contains an integer, , denoting the number of queries.
        Each line  of the  subsequent lines contains three space-separated integers describing the respective , , and  values for that query.

        Constraints

        0 <= q <= 500
        0 <= a,b <= 50
        1 <= n <= 15

        Output Format

        For each query, print the corresponding series on a new line. Each series must be printed in order as a single line of  space-separated integers.

        Sample Input

        2
        0 2 10
        5 3 5
        Sample Output

        2 6 14 30 62 126 254 510 1022 2046
        8 14 26 50 98
    */
    public static void seventhChallange() {
        Scanner scanner = new Scanner(System.in);
        int q = scanner.nextInt();
        for (int i = 1; i <= q; i++) {
            int a = scanner.nextInt();
            int b = scanner.nextInt();
            int n = scanner.nextInt();
            int result = a;
            String finalResult = "";
            for (int j = 0; j < n; j++) {
                result = result + ((int)Math.pow(2, j) * b);
                finalResult += result + " ";
            }
            System.out.println(finalResult);
        }
        scanner.close();
    }
}
