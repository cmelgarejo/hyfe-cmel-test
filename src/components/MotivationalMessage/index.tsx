export default function MotivationalMessage({ value }) {
  const { emoji, message } = getMotivationalMessage(value);

  return (
    <div className="pt-1 pb-1 pl-3 pr-3 mt-2 text-xs text-zinc-700 bg-[var(--motivational-text-bg)] rounded-full max-w-fit">
      <span className="mr-2">{emoji}</span>
      <span>{message}</span>
    </div>
  );
}

export function getMotivationalMessage(value: number): MotivationalMessage {
  if (value >= 50) {
    return { emoji: "😔", message: "It’s getting worse" };
  } else if (value >= 10) {
    return { emoji: "😔", message: "Somewhat worse" };
  } else if (value >= -10) {
    return { emoji: "😐", message: "About the same" };
  } else if (value >= -50) {
    return { emoji: "🙂", message: "Somewhat better" };
  } else {
    return { emoji: "😃", message: "Much better" };
  }
}
