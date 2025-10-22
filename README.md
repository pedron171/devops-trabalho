          # DevOps Trabalho — ${REPO}

          Este README foi gerado automaticamente por **GitHub Actions** em cada push para a branch **${BRANCH}**.

          ## 📦 Info do repositório
          - **Branch:** ${BRANCH}
          - **Arquivos (total):** ${FILE_COUNT}
          - **Arquivos HTML:** ${HTML_COUNT}

          ## 🕒 Última execução
          - **Rodado por:** ${ACTOR}
          - **Data/Hora:** ${DATE}
          - **Última mensagem de commit:** ${LAST_MSG}

          ## 🔧 Como é gerado
          - Workflow: `.github/workflows/generate-readme.yml`
          - Job: `generate`
          EOF

      - name: Commit & Push (somente se mudou)
        run: |
          git config user.name "github-actions[bot]"
          git config user.email "41898282+github-actions[bot]@users.noreply.github.com"

          if ! git diff --quiet README.md; then
            git add README.md
            git commit -m "docs: atualiza README [skip ci]"
            git push
          else
            echo "Sem mudanças no README.md — nada para commitar."
          fi
