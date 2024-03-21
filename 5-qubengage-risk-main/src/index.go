package main

import (
    "encoding/json"
    "log"
    "net/http"
    "strconv"

    "github.com/gorilla/mux"
)

type Output struct {
    Error           bool    `json:"error"`
    Items           []string `json:"items"`
    Attendance      []string `json:"attendance"`
    EngagementScore float64 `json:"engagementScore"`
    Risk            bool    `json:"risk"`
}

func main() {
    router := mux.NewRouter()
    router.HandleFunc("/", getRisk).Methods("GET")
    log.Fatal(http.ListenAndServe(":3003", router))
}

func getRisk(w http.ResponseWriter, r *http.Request) {
    items := []string{r.URL.Query().Get("item_1"), r.URL.Query().Get("item_2"), r.URL.Query().Get("item_3"), r.URL.Query().Get("item_4")}
    attendances := []string{r.URL.Query().Get("attendance_1"), r.URL.Query().Get("attendance_2"), r.URL.Query().Get("attendance_3"), r.URL.Query().Get("attendance_4")}
    
    attendance5 := r.URL.Query().Get("attendance_5")
    engagementScore, _ := strconv.ParseFloat(r.URL.Query().Get("engagementScore"), 64)

    risk := calculateRisk(engagementScore, attendance5)

    output := Output{
        Error: false,
        Items: items,
        Attendance: attendances,
        EngagementScore: engagementScore,
        Risk: risk,
    }

    w.Header().Set("Content-Type", "application/json")
    w.Header().Set("Access-Control-Allow-Origin", "*")
    json.NewEncoder(w).Encode(output)
}

func calculateRisk(score float64, cutoff string) bool {
    cutoffNum, _ := strconv.Atoi(cutoff)
    score *= 100

    return score < float64(cutoffNum)
}
