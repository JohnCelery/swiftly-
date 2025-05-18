# 🕵️‍♂️ Would I Lie To You? — iPad App  
A real-time, 10-player remake of the classic bluffing game, written in **Swift 5.10** with **SwiftUI**, **Combine**, and **Firebase**.  
Works on any iPad running **iPadOS 17+**.

*Play together over Zoom while the app keeps score, timers, and turns.*

---

## ✨ Demo

> _Add screenshots here after first build_  
> - Lobby (side-by-side)  
> - Statement & Interrogation timer  
> - Voting UI  
> - Final leaderboard with confetti  

---

## 📐 Architecture at-a-glance

| Layer | Tech | Purpose |
|-------|------|---------|
| **UI** | SwiftUI <sup>NavigationStack, Layout, Animation</sup> | Adaptive iPad layouts & micro-animations |
| **State** | Combine publishers & `@Observable` models | One-directional data flow |
| **Realtime Sync** | **Firestore** | Users, games, rounds, votes, scores |
| **Auth** | FirebaseAuth (Sign in with Apple & Email/Password) | Secure login |
| **Offline** | Firestore local cache | Seamless reconnect |
| **Animations** | Lottie for victory confetti | Delightful feedback |
| **CI** | GitHub Actions (`xcodebuild test`) | Unit-test gate on PRs |
| **Tests** | XCTest + ViewInspector | ≥ 80 % statement coverage |

---

## 🚀 Quick Start

### 1 · Clone & open

```bash
git clone https://github.com/YourOrg/WILTY-iPad.git
open WILTY.xcodeproj        # or WILTY.xcworkspace if you add CocoaPods# swiftly-
