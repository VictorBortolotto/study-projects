package org.example.easyChallanges;

import java.text.NumberFormat;
import java.time.LocalDate;
import java.util.Locale;
import java.util.Scanner;

public class EasyChallanges2 {

    /*  ELEVENTH CHALLANGE
        You are given an integer n, you have to convert it into a string.

        Please complete the partially completed code in the editor.
        If your code successfully converts n into a string s the code will print "Good job".
        Otherwise it will print "Wrong answer".

        n can range between -100 to 100 inclusive.
     */
    public static void eleventhChallange() {
        Scanner scanner = new Scanner(System.in);
        int b = scanner.nextInt();

        String number = String.valueOf(b);

        if (b == Integer.parseInt(number)) {
            System.out.println("Good job");
        } else {
            System.out.println("Wrong awnser");
        }
    }

    /*  TWELFTH CHALLANGE
        The Calendar class is an abstract class that provides methods for converting between a specific instant in time and a set of calendar fields such as YEAR, MONTH, DAY_OF_MONTH, HOUR, and so on, and for manipulating the calendar fields, such as getting the date of the next week.

        You are given a date. You just need to write the method, getDay, which returns the day on that date. To simplify your task, we have provided a portion of the code in the editor.

        Example

        month  = 8
        day = 14
        year = 2017

        The method should return MONDAY as the day on that date.

        Function Description

        Complete the findDay function in the editor below.

        findDay has the following parameters:

        int: month
        int: day
        int: year
        Returns

        string: the day of the week in capital letters
        Input Format

        A single line of input containing the space separated month, day and year, respectively, in  MM DD YYYY  format.

        Constraints

        2000 < year < 3000

        Sample Input

        08 05 2015
        Sample Output

        WEDNESDAY
     */

    public static void twelfthChallange() {
        findDay(8,5,2015);
    }

    private static String findDay(int month, int day, int year) {
        LocalDate localDate = LocalDate.of(year, month, day);
        String dayOfWeek = localDate.getDayOfWeek().toString();
        return dayOfWeek;
    }

    /*  THIRTEENTH CHALLANGE
        Given a double-precision number, , denoting an amount of money, use the NumberFormat class' getCurrencyInstance method to convert  into the US, Indian, Chinese, and French currency formats. Then print the formatted values as follows:

        US: formattedPayment
        India: formattedPayment
        China: formattedPayment
        France: formattedPayment
        where  is  formatted according to the appropriate Locale's currency.

        Note: India does not have a built-in Locale, so you must construct one where the language is en (i.e., English).

        Input Format

        A single double-precision number denoting .

        Constraints

        Output Format

        On the first line, print US: u where  is  formatted for US currency.
        On the second line, print India: i where  is  formatted for Indian currency.
        On the third line, print China: c where  is  formatted for Chinese currency.
        On the fourth line, print France: f, where  is  formatted for French currency.

        Sample Input

        12324.134
        Sample Output

        US: $12,324.13
        India: Rs.12,324.13
        China: ￥12,324.13
        France: 12 324,13 €
    */

    public static void thirteenthChallange() {
        Scanner scanner = new Scanner(System.in).useLocale(Locale.US);
        double b = scanner.nextDouble();

        NumberFormat numberFormat = NumberFormat.getCurrencyInstance(Locale.US);
        System.out.println("US: " + numberFormat.format(b));
        numberFormat = NumberFormat.getCurrencyInstance(new Locale("en", "IN"));
        System.out.println("India: " + numberFormat.format(b));
        numberFormat = NumberFormat.getCurrencyInstance(new Locale("zh", "CN"));
        System.out.println("China: " + numberFormat.format(b) );
        numberFormat = NumberFormat.getCurrencyInstance(Locale.FRANCE);
        System.out.println("France: "  + numberFormat.format(b));
    }

    /*  FOURTEENTH CHALLANGE
        This exercise is to test your understanding of Java Strings. A sample String declaration:

        String myString = "Hello World!"
        The elements of a String are called characters. The number of characters in a String is called the length, and it can be retrieved with the String.length() method.

        Given two strings of lowercase English letters, A and B, perform the following operations:

        Sum the lengths of A and B.
        Determine if A is lexicographically larger than B (i.e.: does  come before  in the dictionary?).
        Capitalize the first letter in A and B and print them on a single line, separated by a space.
        Input Format

        The first line contains a string A. The second line contains another string B. The strings are comprised of only lowercase English letters.

        Output Format

        There are three lines of output:
        For the first line, sum the lengths of A and B.
        For the second line, write Yes if A is lexicographically greater than B otherwise print No instead.
        For the third line, capitalize the first letter in both A and B and print them on a single line, separated by a space.

        Sample Input 0

        hello
        java
        Sample Output 0

        9
        No
        Hello Java
    */

    public static void fourteenthChallange() {
        Scanner scanner = new Scanner(System.in).useLocale(Locale.US);
        String a = scanner.nextLine();
        String b = scanner.nextLine();
        a = a.toLowerCase().trim();
        b = b.toLowerCase().trim();

        int lengthA = a.length();
        int lengthB = b.length();

        System.out.println(lengthA + lengthB);

        if (a.compareTo(b) > 0) {
            System.out.println("Yes");
        } else {
            System.out.println("No");
        }

        String firstLetterA = a.substring(0, 1);
        String capitallizeA = a.replace(firstLetterA, firstLetterA.toUpperCase());
        String firstLetterB = b.substring(0, 1);
        String capitallizeB = b.replace(firstLetterB, firstLetterB.toUpperCase());
        System.out.println(capitallizeA + " " + capitallizeB);
    }
}
