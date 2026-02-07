const toggle = document.getElementById("themeToggle");
const demoForm = document.getElementById("demoForm");
const demoOutput = document.getElementById("demoOutput");
const demoReset = document.getElementById("demoReset");

const state = {
  answers: null,
  generatedAt: null,
};

if (toggle) {
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("theme-light");
  });
}

function renderOutput() {
  if (!demoOutput) return;
  if (!state.answers) {
    demoOutput.innerHTML = "<h4>アウトプット例</h4><p class=\"muted\">質問に答えると、ここに結果が表示されます。</p>";
    return;
  }
  const { roles, impact, next, strength, industry } = state.answers;
  demoOutput.innerHTML = `
    <h4>あなた向けのアウトプット</h4>
    <ul>
      <li><strong>履歴書サマリー：</strong>${roles} / ${strength}</li>
      <li><strong>職務経歴書の成果：</strong>${impact}</li>
      <li><strong>市場価値レンジ：</strong>${estimateRange(roles, impact)}万円</li>
      <li><strong>相性の良い企業：</strong>${industry}</li>
      <li><strong>次のアクション：</strong>${next}に関連する実績を追加</li>
    </ul>
    <p class="muted">生成時刻: ${state.generatedAt}</p>
  `;
}

function estimateRange(roles, impact) {
  const lengthScore = Math.min(roles.length + impact.length, 40);
  const base = 420 + lengthScore * 6;
  const max = base + 180;
  return `${base}〜${max}`;
}

if (demoForm) {
  demoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(demoForm);
    state.answers = Object.fromEntries(data.entries());
    state.generatedAt = new Date().toLocaleString("ja-JP");
    renderOutput();
  });
}

if (demoReset) {
  demoReset.addEventListener("click", () => {
    state.answers = null;
    state.generatedAt = null;
    demoForm?.reset();
    renderOutput();
  });
}

renderOutput();
