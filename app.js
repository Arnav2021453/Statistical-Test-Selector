// Array of questions, each containing the question text and options
const questions = [
    {
      question: "Only one variable of interest?",
      options: [
        { text: "Yes ", next: one_sample_problem },
        { text: "No", next: option4 },
      ],
    },
    {
      question: "One sample problem?",
      options: [
        { text: "Yes ", next: UDN },
        { text: "No ", next: option1 },
      ],
    },
    {
      question: "Underlying distribution normal or CLT could be assumed ?",
      options: [
        { text: "Yes ", next: Inference },
        { text: "No ", next: UDB },
      ],
    },
    {
      question: "Inference concerning?",
      options: [
        { text: "Yes ", next: known },
        { text: "No ", result: "One-sample chi squared test for variances" },
      ],
    },
    {
      question: "Known?",
      options: [
        { text: "Yes ", result: "One sample z test" },
        { text: "No ", result: "One sample t test" },
      ],
    },
    {
      question: "Underlying distribution binomial?",
      options: [
        { text: "Yes ", next: NAV },
        { text: "No ", next: UDP },
      ],
    },
    {
      question: "Normal approximation valid?",
      options: [
        { text: "Yes ", result: "Normal-theory methods" },
        { text: "No ", result: "Exact methods" },
      ],
    },
    {
      question: "Underlying distribution in Possion?",
      options: [
        { text: "Yes ", result: "One-sample Possion test" },
        {
          text: "No ",
          result:
            "Use another underlying distribution or use non parametric methods ",
        },
      ],
    },
    {
      question: "Two-sample problem?",
      options: [
        { text: "Yes", next: UDNCLT },
        { text: "No", next: option2 },
      ],
    },
    {
      question:
        "Underlying distribution is normal or can Central Limit Theorem be assumed to hold?",
      options: [
        { text: "Yes", next: ICM },
        { text: "No", next: UDB_1 },
      ],
    },
    {
      question: "Inferences concerning means?",
      options: [
        { text: "Yes", next: option3 },
        {
          text: "No",
          result:
            "Inferences concerning variances --> Two-sample f test to compare variances (Caution: This test is very sensitive to nonnormality) on page 295",
        },
      ],
    },
    {
      question: "Underlying distribution is binomial?",
      options: [
        { text: "Yes", next: ASI },
        { text: "No", next: PTD },
      ],
    },
    {
      question: "Are samples independent?",
      options: [
        { text: "Yes", next: EV5 },
        { text: "No", result: "Use McNemar's test" },
      ],
    },
    {
      question: "Person-time data?",
      options: [
        { text: "Yes", next: option5 },
        {
          text: "No",
          result:
            "Use another underlying distribution or use nonparametric methods",
        },
      ],
    },
    {
      question: "Are all expected values ≥ 5?",
      options: [
        { text: "Yes", next: option6 },
        { text: "No", result: "Use Fisher's exact test" },
      ],
    },
    {
      question: "One-sample problem?",
      options: [
        { text: "Yes", result: "Use one-sample test for incidence rates" },
        { text: "No", next: func1 },
      ],
    },
    {
      question: "Incidence rates remain constant over time?",
      options: [
        { text: "Yes", next: func2 },
        { text: "No", next: func3 },
      ],
    },
    {
      question: "Two-sample problem?",
      options: [
        {
          text: "Yes",
          result:
            "Use two-sample test for comparison of incidence rates, if no confounding is present;or methods for stratified person-data, if confounding is present",
        },
        {
          text: "No",
          result:
            "Use test of trend for incidence rates(If interested in test of trend over more than two exposure groups)",
        },
      ],
    },
    {
      question:
        "Use survival-analysis methods. Interested in comparison of survival curves of two groups with limited control of covariates?",
      options: [
        { text: "Yes", result: "Use log-rank test" },
        { text: "No", next: func4 },
      ],
    },
    {
      question:
        "Assuming interested in effects of several risk factors on survival. Willing to assume several curve comes from a weibull distribution?",
      options: [
        {
          text: "Yes",
          result: "Use parameter survival methods based on weibull distribution",
        },
        { text: "No", result: "Use Cox proportional-hazards model" },
      ],
    },
    {
      question: "2 x 2 contingency table?",
      options: [
        {
          text: "Yes",
          result:
            "Use two-sample test for binomial proportions, or 2 x 2 contingency-table methods if no confounding is present, or the Mantel-Haenszel test if confounding is present",
        },
        { text: "No", next: func6 },
      ],
    },
    {
      question: "2 x k contingency table?",
      options: [
        { text: "Yes", next: func7 },
        {
          text: "No",
          result:
            "R x C contingency table, R>2, C>2. Use chi-square test for R X C tables",
        },
      ],
    },
    {
      question: "Interested in trend over k binomial proportions?",
      options: [
        {
          text: "Yes",
          result:
            "Use chi-square test for trend, if no confounding is present, or the Mantel Extension test if confounding is present",
        },
        {
          text: "No",
          result: "Use chi-square test for heterogeneity for 2 x k tables",
        },
      ],
    },
    {
      question:
        "Underlying distribution normal or can central-limit theorem be assumed to hold?",
      options: [
        { text: "Yes", result: "One-way ANOVA" },
        { text: "No", next: func9 },
      ],
    },
    {
      question: "Categorical data?",
      options: [
        { text: "Yes", result: "Use R x C contingency-table methods" },
        {
          text: "No",
          result:
            "Use another underlying distribution or use nonparametric methods such as Kruskal-Wallis test",
        },
      ],
    },
    {
      question: "Are samples independent?",
      options: [
        { text: "No", result: "Use paired t-test" },
        { text: "Yes", next: V2S },
      ],
    },
    {
      question: "Are variances of two samples significantly different?",
      options: [
        { text: "No", result: "Use two sample t-test with equal variances" },
        { text: "Yes", result: "Use two sample t-test with unequal variances" },
      ],
    },
    {
      question: "Interested in relationship between two varibles?",
      options: [
        { text: "YES", next: BVC },
        { text: "NO", next: OVCB },
      ],
    },
    {
      question: "Are both variables continuous?",
      options: [
        { text: "YES", next: IPV },
        { text: "NO", next: OCVC },
      ],
    },
    {
      question: "Interested in predicting one varibale from other?",
      options: [
        { text: "YES", result: "Simple linear regression" },
        { text: "NO", next: ISV },
      ],
    },
    {
      question:
        "Interested in studying the correlation between 2 variables; Both variables are normal?",
      options: [
        { text: "YES", result: "Pearson correlation methods" },
        { text: "NO", result: "Rank correlation methods" },
      ],
    },
    {
      question: "Is one variable continuous or categorical?",
      options: [
        { text: "YES", next: NCV },
        { text: "NO", next: OD },
      ],
    },
    {
      question: "Ordinal data?",
      options: [
        { text: "YES", result: "Rank correlation Methods" },
        { text: "NO", next: AR},
      ],
    },
    {
      question: "Both variables categorical: Are you interested in Association or Reproducibility?",
      options: [
        { text: "Association", result: "Use contingency table methods" },
        { text: "Reproductivity", result: "Use Kappa statistic" },
      ],
    },
    {
      question: "Number of ways in which the categorical variable is classified",
      options: [
      { text: "1", next: A}, 
      { text: "2", next: B }, 
      { text: "More than 2", next: C}],
    },
    {
      question:
        "Is outcome variable normal or can be central limit theorem be assumed to be hold?",
      options: [
        { text: "Yes", next: OCV},
        { text: "NO", result: "Non-parametric Kruskal-wallis test" },
      ],
    },
    {
      question: "Other covariates to be controlled for?",
      options: [
        { text: "Yes", result: " One-way Ancova " },
        { text: "No", result: " One-way Anova" },
      ],
    },
    
    {
      question: "Other covariates to be controlled for?",
      options: [
        { text: "Yes", result: " Two-way Ancova " },
        { text: "No", result: " Two-way Anova" },
      ],
    },
    {
      question: "Other covariates to be controlled for?",
      options: [
        { text: "Yes", result: " Higher-way Ancova " },
        { text: "No", result: " Higher-way Anova" },
      ],
    },
    {
      question: "Output variable is continuous or binary?",
      options: [
        { text: "Continuous", result: "Multiple regression methods " },
        { text: "Binary", next: BIN },
      ],
    },
    {
      question: "Time of events important?",
      options: [
        { text: "Yes", next: option5 },
        { text: "No", result: "Multiple logistic regression methods" },
      ],
    },
    
  ];
  
  // Index of the current question being displayed
  let currentQuestionIndex = 0;

  // Array to keep track of previous question indices for the "Prev" button functionality
  const prevQuestionIndices = [];
  
  // Function to display the current question and its options
  function displayQuestion(questionIndex) {
    const question = questions[questionIndex];
    $("#question").text(question.question);
    $("#options").empty();
  
    // Creating buttons for each option of the question
    for (const option of question.options) {
      const optionBtn = $("<button>", {
        text: option.text,
        class: "btn btn-primary option-btn shadow-sm",
        click: () => handleOptionClick(option),
      });
      $("#options").append(optionBtn);
    }
  
    // Toggle visibility of "Prev" and "Next" buttons based on the current question index
    $("#prev-btn").toggleClass("d-none", questionIndex === 0);
    $("#next-btn").toggleClass("d-none", questionIndex === questions.length - 1);
  }
  
  // Function to handle user's click on an option
  function handleOptionClick(option) {
    if (option.result) {
       // If the option has a result, display the result
      $("#result").html(`<p class="result-card shadow">${option.result}</p>`);
    } else if (option.next) {
      // If the option leads to the next question, update current index, display next question, and clear result
      prevQuestionIndices.push(currentQuestionIndex);
      currentQuestionIndex = option.next();
      displayQuestion(currentQuestionIndex);
      $("#result").empty();
    }
  }
  
  // Function to show the previous question when "Prev" button is clicked
  function showPreviousQuestion() {
    if (prevQuestionIndices.length > 0) {
      currentQuestionIndex = prevQuestionIndices.pop();
      displayQuestion(currentQuestionIndex);
      $("#result").empty();
    }
  }
  // Various functions corresponding to different branches of the decision tree
  function one_sample_problem() {
    return 1;
  }
  function Inference() {
    return 3;
  }
  function UDN() {
    return 2;
  }
  function UDB() {
    return 5;
  }
  function known() {
    return 4;
  }
  function NAV() {
    return 6;
  }
  function UDP() {
    return 7;
  }
  function UDNCLT() {
    return 9;
  }
  function ICM() {
    return 10;
  }
  function UDB_1() {
    return 11;
  }
  function ASI() {
    return 12;
  }
  function PTD() {
    return 13;
  }
  function EV5() {
    return 14;
  }
  function V2S() {
    return 26;
  }
  function func1() {
    return 16;
  }
  function func2() {
    return 17;
  }
  function func3() {
    return 18;
  }
  function func4() {
    return 19;
  }
  function func6() {
    return 21;
  }
  function func7() {
    return 22;
  }
  function func9() {
    return 24;
  }
  function BVC() {
    return 28;
  }
  function IPV() {
    return 29;
  }
  function ISV() {
    return 30;
  }
  function OCVC() {
    return 31;
  }
  function OD(){
    return 32;
  }
  function AR(){
    return 33;
  }
  function NCV(){
    return 34;
  }
  function A(){
    return 35;
  }
  function OCV(){
    return 36;
  }
  function B(){
    return 37;
  }
  function C(){
    return 38;
  }
  function OVCB(){
    return 39;
  }
  function BIN(){
    return 40;
  }
  function option4() {
    return 27;
  }
  function option1() {
    return 8;
  }
  function option2() {
    return 23;
  }
  function option3() {
    return 25;
  }
  function option5() {
    return 15;
  }
  function option6() {
    return 20;
  }
  function showCorrelationsOptions() {
    return 1;
  }
  
  function showDifferencesOptions() {
    return 3;
  }
  
  function showMeansOptions() {
    return 4;
  }
  
  function showDistributionTestOptions() {
    return 4;
  }
  
  function showIndependentSamplesOptions() {
    return 5;
  }
  
  // Add event listener for the "Prev" button
  $("#prev-btn").on("click", function () {
    showPreviousQuestion();
  });
  
  displayQuestion(currentQuestionIndex);
  