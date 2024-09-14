package org.example;

import java.util.Locale;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        //Hackerrank first challange
        firstChallange();

        //Hackerrank second challange
        secondChallange();

        //Hackerrank third challange
        thirdChallange();

        //Hackerrank fourth challange
        fourthChallange();

        //Hackerrank fifth challange
        fifthChallange();

        //Hackerrank fifth challange
        sixthChallange();
    }

    public static void firstChallange() {
        System.out.println("Hello, World.");
        System.out.println("Hello, Java.");
    }

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

    public static void sixthChallange() {
        Scanner scanner = new Scanner(System.in);
        int firstNumber = scanner.nextInt();
        for (int i = 1; i <= 10; i++) {
            System.out.println(firstNumber + " x " + i + " = " + (firstNumber * i));
        }
        scanner.close();
    }
}