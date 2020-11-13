import React from 'react'

import { Layout } from '../Layout'

import './ErrorBoundary.scss'

type Props = { children: React.ReactNode }

type State = { hasError: boolean }

class ErrorBoundary extends React.Component<Props, State> {
  readonly state: State = {
    hasError: false,
  }

  static getDerivedStateFromError(_: Error): State {
    return { hasError: true }
  }

  static componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      return (
        <Layout>
          <h2>Sorry.. there was an error</h2>
        </Layout>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
