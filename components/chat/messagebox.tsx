import React from 'react'
import { Card, CardContent, CardFooter } from '../ui/card'
import Markdown from '../markdown'

type Props = {
  role: string,
  content: string
}

const MessageBox = ({ role, content }: Props) => {
  const isUser = role === "user";
  
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <Card className={`overflow-hidden max-w-[85%] ${
        isUser 
          ? 'bg-blue-500 text-white border-blue-500' 
          : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700'
      } shadow-sm`}>
        <CardContent className="p-4 text-sm">
          <Markdown text={content} />
        </CardContent>
        {!isUser && (
          <CardFooter className="border-t border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 px-4 py-2 text-xs text-slate-500 dark:text-slate-400">
            Disclaimer: Medical advice is for informational purposes only and should not replace professional medical diagnosis.
          </CardFooter>
        )}
      </Card>
    </div>
  )
}

export default MessageBox