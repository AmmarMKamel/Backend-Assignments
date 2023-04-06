package main

import (
    "bufio"
    "fmt"
    "os"
    "strings"
)

func main() {
    fmt.Print("Enter text: ")
    scanner := bufio.NewScanner(os.Stdin)
    scanner.Scan()
    text := strings.ToLower(scanner.Text())
    words := strings.Fields(text)
    wordCount := make(map[string]int)

    for _, word := range words {
        wordCount[word]++
    }

    for word, count := range wordCount {
        fmt.Printf("%s: %d\n", word, count)
    }
}