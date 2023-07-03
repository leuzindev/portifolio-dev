interface ButtonPrimaryContentProps {
  label: string
}

export function ButtonPrimaryContent({ label }: ButtonPrimaryContentProps) {
  return <div className="mx-2 font-semibold text-purple-1">{label}</div>
}
